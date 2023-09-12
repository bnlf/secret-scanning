//===Any global variables whose scope will need to be across the entire file...
var currentId;

//===Actually, I am kind of a big fan of defining a Global object, or something
//	 similar to store all of my page-level variables to. Something like:
var Global = {
	currentId: undefined,
	action: 'create',
	user: {
		userName: 'Bob',
		email: 'bgibilaro@valexander.com',
		password: 'excluded123'
	}
};
