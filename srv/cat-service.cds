using my.bookshop as my from '../db/data-model';
service CatalogService {
     @odata.draft.enabled
    entity Books as projection on my.Books;
      
    entity child as projection on my.child;
      
    entity user as projection on my.user;

     @odata.draft.enabled
    entity main as projection on my.main;
    entity child1 as projection on my.child1;
    entity members as projection on my.members;
    entity assignment_criteria_help as projection on my.assignment_criteria_help;
    entity condition_help as projection on my.condition_help;
    entity currency_help as projection on my.currency_help;
    entity member_help as projection on my.member_help;
    entity vendor_help as projection on my.vendor_help;


}
