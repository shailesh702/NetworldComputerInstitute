import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
// Meteor.startup(() => {
//   // code to run on server at startup
// });


//import './emailText.html';


Meteor.startup(function(){
	
	process.env.MAIL_URL = 'smtp://jaiswal.shailesh7%40gmail.com:*123shsonu*@smtp.gmail.com:465';
	//process.env.MAIL_URL = 'smtp://shailesh%40sandbox8be928b4287040cdbc290e6a81af49c4.mailgun.org:123456@smtp.mailgun.org:465';
	//console.log(process.env);
});

Meteor.methods({
	sendemail : function(to,from,subject,text,name,email,contact_number,address,maritial_status,gender,qualification,age,mscit,wavegroup,dcia,xpert,ccoa,ccgd,ccwd,se,swhw,others,reference,comment,event){
		
		//check([to,from,subject,text],[String]);
		//this.inblock();
		SSR.compileTemplate('htmlEmail', Assets.getText('emailText/emailText.html'));
		
		
		var emailData = {
  		name: name,
  		email: email,
		contact_number:contact_number,
		address : address,
		maritial_status : maritial_status,
		gender : gender,
		qualification: qualification,
		age: age,
		mscit :  mscit,
		wavegroup : wavegroup,
		dcia : dcia,
		xpert : xpert,
		ccoa : ccoa,
		ccgd : ccgd,
		ccwd : ccwd,
		se : se,
		swhw : swhw,
		others : others,
		reference : reference,
		comment : comment
		};
		Email.send({
			to:to,
			from:from,
			subject:subject,
			//text:text
			html: SSR.render('htmlEmail', emailData)
			//html:'<strong>Look at that stack of cakes!</strong>'
		});	
		console.log("Mail sent");
	}
});
