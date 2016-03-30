// / .. /	All regular expressions start and end with forward slashes.
// ^	Matches the beginning of the string or line.
// \w+	Matches one or more word characters including the underscore. Equivalent to [A-Za-z0-9_].
// [\.-]	\ Indicates that the next character is special and not to be interpreted literally.
// .- matches character . or -.
// ?	Matches the previous character 0 or 1 time. Here previous character is [.-].
// \w+	Matches 1 or more word characters including the underscore. Equivalent to [A-Za-z0-9_].
// *	Matches the previous character 0 or more times.
// ([.-]?\w+)*	Matches 0 or more occurrences of [.-]?\w+.
// \w+([.-]?\w+)*	The sub-expression \w+([.-]?\w+)* is used to match the username in the email. It begins with at least one or more word characters including the underscore, equivalent to [A-Za-z0-9_]. , followed by . or - and . or - must follow by a word character (A-Za-z0-9_).
// @	It matches only @ character.
// \w+([.-]?\w+)*	It matches the domain name with the same pattern of user name described above..
// \.\w{2,3}	It matches a . followed by two or three word characters, e.g., .edu, .org, .com, .uk, .us, .co etc.
// +	The + sign specifies that the above sub-expression shall occur one or more times, e.g., .com, .co.us, .edu.uk etc.
// $	Matches the end of the string or line.

function validateEmail(inputEmail) {
	// email validation
	var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	// user data
	var userEmail = inputEmail
	// if user data passes email validation, do this
	if( userEmail.value.match(mailFormat) ) {
		document.form1.email1.focus()
		alert('email valid and ready to send')
		return true
	} else {
		alert("You have entered an invalid email address!");  
		document.form1.email1.focus();  
		return false;  
	}
}







