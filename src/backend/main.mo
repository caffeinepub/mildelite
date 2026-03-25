import Time "mo:core/Time";
import Int "mo:core/Int";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    name : Text;
    phone : Text;
    location : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Inquiry {
    public func compare(a : Inquiry, b : Inquiry) : Order.Order {
      Int.compare(b.timestamp, a.timestamp);
    };
  };

  let inquiries = Map.empty<Text, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, location : Text, message : Text) : async () {
    let timestamp = Time.now();
    let inquiry : Inquiry = {
      name;
      phone;
      location;
      message;
      timestamp;
    };
    let id = message.concat(name).concat(phone).concat(timestamp.toText());
    if (inquiries.containsKey(id)) { Runtime.trap("Inquiry already exists") };
    inquiries.add(id, inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };
};
