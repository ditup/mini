# Client Model

This is a client model of the application. It's created with [@ngrx](https://github.com/ngrx/platform) libraries. (redux-like)
The files are generated with `@ngrx/schematics` library integrated in `@angular/cli`.

Please generate further files with schematics, too.

@TODO write commands here
@TODO add links to quality documents/posts/tutorials for learning the @ngrx

To keep things simple the application's state is flat. That means we don't deeply nest reducers etc.

Reducers for keeping the data (generated with @ngrx/entity):
- User
- Tag
- UserTag

Reducers for keeping the state of UX: (should end with _Page_):


Other reducers:
- Auth
