var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","component":"HomeComponent"},{"path":"booking","component":"MainBookingComponent"},{"path":"admin","loadChildren":"./admin/admin.module#AdminModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/admin-routing.module.ts","module":"AdminRoutingModule","children":[{"path":"login","component":"SecurityComponent"},{"path":"logout","component":"SecurityComponent"},{"path":"users","component":"UsersTableComponent"},{"path":"dashboard","component":"DashboardComponent"},{"path":"tags","loadChildren":"./tag/tag.module#TagModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/admin/tag/tag-routing.module.ts","module":"TagRoutingModule","children":[{"path":"","component":"TagTableComponent"},{"path":"form","component":"TagFormComponent"}],"kind":"module"}],"module":"TagModule"}]}],"kind":"module"}],"module":"AdminModule"}]},{"path":"**","pathMatch":"full","component":"PageNotFoundComponent"}],"kind":"module"}]}
