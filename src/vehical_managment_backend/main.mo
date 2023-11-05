import Debug "mo:base/Debug";
import Array "mo:base/Array";
import List "mo:base/List";
import Map "mo:base/HashMap";
import Buffer "mo:base/Buffer";


import HashMap "mo:base/HashMap";
import Text "mo:base/Text";

actor  DVehicalUpload{

  stable var globalArray : [Int] = [];
  var temp:[Int]=[];
// all datastructs to save the data
  var number_vechical_map=HashMap.HashMap<Text,Text>(1,Text.equal,Text.hash);
 
  var map_front_image=HashMap.HashMap<Text,[Int]>(1,Text.equal,Text.hash);
  var map_back_image=HashMap.HashMap<Text,[Int]>(1,Text.equal,Text.hash);
  var map_side_R_image=HashMap.HashMap<Text,[Int]>(1,Text.equal,Text.hash);
  var map_size_L_image=HashMap.HashMap<Text,[Int]>(1,Text.equal,Text.hash);
  var map_last_servicing=HashMap.HashMap<Text,Text>(1,Text.equal,Text.hash);
  var map_model_details=HashMap.HashMap<Text,Text>(1,Text.equal,Text.hash);
  var map_owner=HashMap.HashMap<Text,Text>(1,Text.equal,Text.hash);
  var map_curr_km_reading=HashMap.HashMap<Text,Text>(1,Text.equal,Text.hash);
  var map_curr_rider_adhaar=HashMap.HashMap<Text,[Int]>(1,Text.equal,Text.hash);
  var map_vehical_name=HashMap.HashMap<Text,Text>(1,Text.equal,Text.hash);
 

  public func register_vehical_details(
    vehical_number: Text,
    front_image: [Int],
    back_image: [Int],
    side_image_R: [Int],
    side_image_L: [Int],
    last_servicing: Text,
    model_details: Text,
    owner:  Text,
    curr_km_reading: Text,
    curr_rider_adhaar: [Int],
    vehical_name:Text
  
    ): async (){
    
    number_vechical_map.put(vehical_number,vehical_number);
   
    map_front_image.put(vehical_number,front_image);
    map_back_image.put(vehical_number,back_image);
    map_side_R_image.put(vehical_number,side_image_R);
    map_size_L_image.put(vehical_number,side_image_L);
    map_last_servicing.put(vehical_number,last_servicing);
    map_model_details.put(vehical_number,model_details);
    map_owner.put(vehical_number,owner);
    map_curr_km_reading.put(vehical_number,curr_km_reading);
    map_curr_rider_adhaar.put(vehical_number,curr_rider_adhaar);
    map_vehical_name.put(vehical_number,vehical_name);
  };

  public query func print_vehical_number_name(vehical_number: Text): async ?Text{
      return number_vechical_map.get(vehical_number);
  };
  public query func print_front_image(vehical_number: Text): async ?[Int]{
      return map_front_image.get(vehical_number);
  };
  public query func print_back_image(vehical_number: Text): async ?[Int]{
      return map_back_image.get(vehical_number);
  };
  public query func print_side_R_image(vehical_number: Text): async ?[Int]{
      return map_side_R_image.get(vehical_number);
  };
  public query func print_side_L_image(vehical_number: Text): async ?[Int]{
      return map_size_L_image.get(vehical_number);
  };
  public query func print_last_service(vehical_number: Text): async ?Text{
      return map_last_servicing.get(vehical_number);
  };
  public query func print_owner_name(vehical_number: Text): async ?Text{
      return map_owner.get(vehical_number);
  };
  public query func print_model_details(vehical_number: Text): async ?Text{
      return map_model_details.get(vehical_number);
  };
  public query func print_curr_km(vehical_number: Text): async ?Text{
      return map_curr_km_reading.get(vehical_number);
  };
  public query func print_curr_rider_adhaar(vehical_number: Text): async ?[Int]{
      return map_curr_rider_adhaar.get(vehical_number);
  };
  public query func print_vehical_name(vehical_number: Text): async ?Text{
      return map_vehical_name.get(vehical_number);
  };
  
};