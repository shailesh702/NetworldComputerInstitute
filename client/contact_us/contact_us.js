
//export const contact = new Mongo.Collection('contact');

Template.contact_us.onCreated(function(){
    var self= this;
    this.autorun( function() {
        	// self.subscribe('contact');        
    });
});
Template.contact_us.events({
	"submit .contact":function (event) {
		event.preventDefault();
		//event.defaultPrevented;
		//alert("hello");
		var name = event.target.name.value;
		var email = event.target.email.value;
		var contact_number = event.target.contact_number.value;
		var address = event.target.address.value;
		var maritial_status = event.target.MaritialStatus.value;
		var gender = event.target.gender.value;
		var qualification = event.target.qualification.value;
		var age = event.target.age.value;
		var mscit = event.target.mscit.value;
		var wavegroup = event.target.wavegroup.value;
		var dcia = event.target.dcia.value;
		var xpert = event.target.xpert.value;
		var ccoa = event.target.ccoa.value;
		var ccgd = event.target.ccgd.value;
		var ccwd = event.target.ccwd.value;
		var se =event.target.se.value;
		var swhw = event.target.swhw.value;
		var others = event.target.others.value;
		var reference = event.target.reference.value;
		var comment = event.target.comments.value;
		
		alert(comment);
		//Meteor.call("contact",name,email,company_name,contact_number,comment);
		Meteor.call("sendemail",'shh_702@yahoo.co.in','jaiswal.shailesh7@gmail.com','Welcome message','This is test of email sending process.',name,email,contact_number,address,maritial_status,gender,qualification,age,mscit,wavegroup,dcia,xpert,ccoa,ccgd,ccwd,se,swhw,others,reference,comment);
		Toast.info("Mail sent successfully");
		//alert("Mail sent successfully");
		event.target.name.value='';
		event.target.email.value='';		
		event.target.contact_number.value='';
		event.target.address.value='';
		event.target.maritial_status.value='';
		event.target.qualification.value='';
		event.target.age.value='';
		// event.target.mscit.value='';
		// event.target.wavegroup.value='';
		// event.target.dcia.value='';
		event.target.reference.value='';
		event.target.comments.value='';
	}
});