namespace my.bookshop;

entity Books {
  key ID : Integer @Core.Computed;
  title  : String;
  stock  : Integer;
  rel :Composition of  many child on rel.UUID = ID;
  rel2 :Composition of  many user on rel2.id= ID;
}
entity child {
  key UUID :Integer;
  key id :UUID;
  name: String;
  chh: Association to many Books; 
}
entity user{
  key id: Integer;
  key id2 :UUID;
   name :String;
  chh2: Association to many Books; 
}

entity main{
  key ID : Integer @Core.Computed;
  assighnment_rule_name : String;
  assignment_criteria: String;
  condition : String;
  amount :Integer;
  currency :Integer;
  amount_from : Integer;
  amount_to :Integer;
  comment : String;
  rell1 :Composition of  many child1 on rell1.ID = ID;
  rel12 :Composition of  many members on rel12.ID= ID;
}
entity child1{
    key ID : Integer;
    key UUID : UUID;
  assighnment_rule_name : String;
  assignment_criteria: String;
  condition : String;
  code:String;
  amount :Integer;
  currency :String;
  amount_from : Integer;
  amount_to :Integer;
  child :Association to many main;

}
entity members{
  key ID : Integer;
  key UUID : UUID;
    id1 :String;
  is_group: String;
  member_name : String;
   position: String;
  child2 :Association to many main;
}
entity assignment_criteria_help{
  value2: String;
}
entity condition_help{
  value :String;
  value2: String;
  code: String;

}
entity currency_help{
  description : String;
  code: String;
}
entity member_help{
  id1 :String;
  is_group: String;
  name : String;
  position: String;

}
entity vendor_help{
  code: String;
  description:String;
};
