Router.configure({
	// layoutTemplate:'mainPage'
	//layoutTemplate:'hello'
	/*yieldTemplates: {
		'Footer': { to: 'footer'}
	}*/
});
Router.route('/',function(){
	// this.render('home');
	// this.layout('mainNav');
	//this.render('hello');
});
// Router.route('/softwarecourses',{
// 	//this.render('softwarecourses');
// 	// this.layout('mainNav');
// 	path:'softwarecourses',
// 	name:'softwarecourses'
// });
// Router.route('/contact_us',function(){
// 	this.render('contact_us');
// 	this.layout('mainNav');
// });