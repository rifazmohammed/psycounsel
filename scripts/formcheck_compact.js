var reWhitespace = /^\s+$/
var reLetter = /^[a-zA-Z]$/
var reAlphabetic = /^[a-zA-Z]+$/
var reAlphanumeric = /^[a-zA-Z0-9]+$/
var reDigit = /^\d/
var reLetterOrDigit = /^([a-zA-Z]|\d)$/
var reInteger = /^\d+$/
var reSignedInteger = /^(\+|-)?\d+$/
var reFloat = /^((\d+(\.\d*)?)|((\d*\.)?\d+))$/
var reSignedFloat = /^(((\+|-)?\d+(\.\d*)?)|((\+|-)?(\d*\.)?\d+))$/
var  reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
var reUrl = /^(?:(?:ftp|https?):\/\/)?(?:[a-z0-9](?:[-a-z0-9]*[a-z0-9])?\.)+(?:com|edu|biz|org|gov|in|info|mil|net|name|museum|coop|aero|[a-z][a-z])\b(?:\d+)?(?:\/[^;<>()\[\]{}\s\x7f-\xff]*(?:[.,?]+[^;<>()\[\]{}\s\x7f-\xff]+)*)?/
var digits = "0123456789";
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var whitespace = " \t\n\r";
var phoneNumberDelimiters = "()- .";
var validUSPhoneChars = digits + phoneNumberDelimiters;
var validWorldPhoneChars = digits + phoneNumberDelimiters + "+";
var SSNDelimiters = "- ";
var validSSNChars = digits + SSNDelimiters;
var digitsInSocialSecurityNumber = 9;
var digitsInUSPhoneNumber = 10;
var ZIPCodeDelimiters = "-";
var ZIPCodeDelimeter = "-"
var validZIPCodeChars = digits + ZIPCodeDelimiters
var digitsInZIPCode1 = 5
var digitsInZIPCode2 = 9
var digitsInZIPCode3 = 6
var creditCardDelimiters = " "
var mPrefix="";
var mSuffix=" darf nicht leer gelassen werden";
var sUSLastName = "Last Name"
var sUSFirstName = "First Name"
var sWorldLastName = "Family Name"
var sWorldFirstName = "Given Name"
var sTitle = "Title"
var sCompanyName = "Company Name"
var sUSAddress = "Street Address"
var sWorldAddress = "Address"
var sCity = "City"
var sStateCode = "State Code"
var sWorldState = "State, Province, or Prefecture"
var sCountry = "Country"
var sZIPCode = "ZIP Code"
var sWorldPostalCode = "Postal Code"
var sPhone = "Phone Number"
var sFax = "Fax Number"
var sDateOfBirth = "Date of Birth"
var sExpirationDate = "Expiration Date"
var sEmail = "Email"
var sSSN = "Social Security Number"
var sCreditCardNumber = "Credit Card Number"
var sOtherInfo = "Other Information"
var iStateCode = "This field must be a valid two character U.S. state abbreviation (like CA for California). Please re-enter it now."
var iZIPCode = "This field must be a 5 or 9 digit U.S. ZIP Code (like 94043). Please re-enter it now."
var iUSPhone = "This field must be a 10 digit U.S. phone number (like 415-555-1212). Please re-enter it now."
var iWorldPhone = "This field must be a valid international phone number. Please re-enter it now."
var iSSN = "This field must be a 9 digit U.S. social security number (like 123 45 6789). Please re-enter it now."
var iEmail = "This field must be a valid email address (like foo@bar.com). Please re-enter it now."
var iCreditCardPrefix = "This is not a valid "
var iCreditCardSuffix = " credit card number.Please re-enter it now."
var iDay = "This field must be a day number between 1 and 31.  Please re-enter it now."
var iMonth = "This field must be a month number between 1 and 12.  Please re-enter it now."
var iYear = "This field must be a 2 or 4 digit year number.  Please re-enter it now."
var iDatePrefix = "The Day, Month, and Year for "
var iDateSuffix = " do not form a valid date.  Please re-enter them now."
var pEntryPrompt = "Please enter a "
var pStateCode = "2 character code (like CA)."
var pZIPCode = "5 or 9 digit U.S. ZIP Code (like 94043)."
var pUSPhone = "10 digit U.S. phone number (like 415-555-1212)."
var pWorldPhone = "international phone number."
var pSSN = "9 digit U.S. social security number (like 123 45 6789)."
var pEmail = "valid email address (like foo@bar.com)."
var pCreditCard = "valid credit card number."
var pDay = "day number between 1 and 31."
var pMonth = "month number between 1 and 12."
var pYear = "2 or 4 digit year number."
var defaultEmptyOK = false
function makeArray(n) {
   for (var i = 1; i <= n; i++) {
      this[i] = 0
   } 
   return this
}
var daysInMonth = makeArray(12);
daysInMonth[1] = 31;
daysInMonth[2] = 29;   
daysInMonth[3] = 31;
daysInMonth[4] = 30;
daysInMonth[5] = 31;
daysInMonth[6] = 30;
daysInMonth[7] = 31;
daysInMonth[8] = 31;
daysInMonth[9] = 30;
daysInMonth[10] = 31;
daysInMonth[11] = 30;
daysInMonth[12] = 31;
var USStateCodeDelimiter = "|";
var USStateCodes = "AL|AK|AS|AZ|AR|CA|CO|CT|DE|DC|FM|FL|GA|GU|HI|ID|IL|IN|IA|KS|KY|LA|ME|MH|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|MP|OH|OK|OR|PW|PA|PR|RI|SC|SD|TN|TX|UT|VT|VI|VA|WA|WV|WI|WY|AE|AA|AE|AE|AP"
function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}
function isWhitespace (s)
{   
    return (isEmpty(s) || reWhitespace.test(s));
}
function stripCharsInRE (s, bag)
{       return s.replace(bag, "")
}
function stripCharsInBag (s, bag)

{   var i;
    var returnString = "";
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }

    return returnString;
}
function stripCharsNotInBag (s, bag)
{   var i;
    var returnString = "";
    for (i = 0; i < s.length; i++)
    {   
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }
    return returnString;
}
function stripWhitespace (s)
{   return stripCharsInBag (s, whitespace)
}
function charInString (c, s)
{   for (i = 0; i < s.length; i++)
    {   if (s.charAt(i) == c) return true;
    }
    return false
}
function stripInitialWhitespace (s)
{   var i = 0;
    while ((i < s.length) && charInString (s.charAt(i), whitespace))
       i++;   
    return s.substring (i, s.length);
}
function isLetter (c)
{   return reLetter.test(c)
}
function isDigit (c)
{   return reDigit.test(c)
}
function isLetterOrDigit (c)
{   return reLetterOrDigit.test(c)
}
function isInteger (s)
{   var i;

    if (isEmpty(s)) 
		if (isInteger.arguments.length == 1)
			return defaultEmptyOK;
		else
			return (isInteger.arguments[1] == true);
	else {
		return reInteger.test(s)
	}
}
function isSignedInteger (s)
{   if (isEmpty(s)) 
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);
    else {
       return reSignedInteger.test(s)
    }
}
function isPositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isPositiveInteger.arguments.length > 1)
        secondArg = isPositiveInteger.arguments[1];
    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) > 0) ) );
}
function isNonnegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];
    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) >= 0) ) );
}
function isNegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNegativeInteger.arguments.length > 1)
        secondArg = isNegativeInteger.arguments[1];
    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) < 0) ) );
}
function isNonpositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonpositiveInteger.arguments.length > 1)
        secondArg = isNonpositiveInteger.arguments[1];
    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) <= 0) ) );
}
function isFloat (s)
{   if (isEmpty(s)) 
       if (isFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isFloat.arguments[1] == true);
    return reFloat.test(s)
}
function isSignedFloat (s)

{   if (isEmpty(s)) 
       if (isSignedFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedFloat.arguments[1] == true);

    else {
       return reSignedFloat.test(s)
    }
}
function isAlphabetic (s)
{   var i;
    if (isEmpty(s)) 
       if (isAlphabetic.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphabetic.arguments[1] == true);
    else {
       return reAlphabetic.test(s)
    }
}
function isAlphanumeric (s)
{   var i;
    if (isEmpty(s)) 
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);
    else {
       return reAlphanumeric.test(s)
    }
}
function reformat (s)
{   var arg;
    var sPos = 0;
    var resultString = "";
    for (var i = 1; i < reformat.arguments.length; i++) {
       arg = reformat.arguments[i];
       if (i % 2 == 1) resultString += arg;
       else {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}
function isSSN (s)
{   if (isEmpty(s)) 
       if (isSSN.arguments.length == 1) return defaultEmptyOK;
       else return (isSSN.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInSocialSecurityNumber)
}
function isUSPhoneNumber (s)
{   if (isEmpty(s)) 
       if (isUSPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isUSPhoneNumber.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInUSPhoneNumber)
}
function isInternationalPhoneNumber (s)
{   if (isEmpty(s)) 
       if (isInternationalPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isInternationalPhoneNumber.arguments[1] == true);
    return (isPositiveInteger(s))
}
function isZIPCode (s)
{ 
    if (isEmpty(s)) 
       if (isZIPCode.arguments.length == 1) return defaultEmptyOK;
       else return (isZIPCode.arguments[1] == true);
   
   if(isZIPCode.arguments[2]== true)
   {	
   return (isInteger(s) && 
            ((s.length == digitsInZIPCode1) ||
             (s.length == digitsInZIPCode2) ||
             (s.length == digitsInZIPCode3)))
             }
  else
  {
   return (isInteger(s) && 
            ((s.length == digitsInZIPCode1) ||
             (s.length == digitsInZIPCode2)))} 
}
function isCanadaZIPCode (s)
{   if (isEmpty(s)) 
       if (isZIPCode.arguments.length == 1) return defaultEmptyOK;
       else return (isZIPCode.arguments[1] == true);
   
   return (isInteger(s) && 
            (s.length == digitsInZIPCode3))
}
function isStateCode(s)
{   if (isEmpty(s)) 
       if (isStateCode.arguments.length == 1) return defaultEmptyOK;
       else return (isStateCode.arguments[1] == true);
    return ( (USStateCodes.indexOf(s) != -1) &&
             (s.indexOf(USStateCodeDelimiter) == -1) )
}
function isEmail (s)
{	
	if (isEmpty(s)) 
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);
    
    else {
       return reEmail.test(s)
    }
}
function isYear (s)
{   if (isEmpty(s)) 
       if (isYear.arguments.length == 1) return defaultEmptyOK;
       else return (isYear.arguments[1] == true);
    if (!isNonnegativeInteger(s)) return false;
    return ((s.length == 2) || (s.length == 4));
}
function isIntegerInRange (s, a, b)
{   if (isEmpty(s)) 
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);
    if (!isInteger(s, false)) return false;
    var num = parseInt (s);
    return ((num >= a) && (num <= b));
}
function isMonth (s)
{   if (isEmpty(s)) 
       if (isMonth.arguments.length == 1) return defaultEmptyOK;
       else return (isMonth.arguments[1] == true);
    return isIntegerInRange (s, 1, 12);
}
function isDay (s)
{   if (isEmpty(s)) 
       if (isDay.arguments.length == 1) return defaultEmptyOK;
       else return (isDay.arguments[1] == true);   
    return isIntegerInRange (s, 1, 31);
}
function daysInFebruary (year)
{   return (  ((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0) ) ) ? 29 : 28 );
}
function isDate (year, month, day)
{   
    if (! (isYear(year, false) && isMonth(month, false) && isDay(day, false))) return false;
    var intYear = parseInt(year);
    var intMonth = parseInt(month);
    var intDay = parseInt(day);
    if (intDay > daysInMonth[intMonth]) return false; 
    if ((intMonth == 2) && (intDay > daysInFebruary(intYear))) return false;
    return true;
}
function prompt (s)
{   window.status = s
}
function promptEntry (s)
{   window.status = pEntryPrompt + s
}
function warnEmpty (theField, s)
{   theField.focus()
    alert( s );
    return false
}
function warnInvalid (theField, s)
{   theField.focus()
    alert(s)
    return false
}
function checkString(theField, s, emptyOK)
{   
    if (checkString.arguments.length == 2) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (isWhitespace(theField.value)) 
       return warnEmpty (theField, s);
    else return true;
}
function checkStateCode (theField, emptyOK)
{   if (checkStateCode.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  theField.value = theField.value.toUpperCase();
       if (!isStateCode(theField.value, false)) 
          return warnInvalid (theField, iStateCode);
       else return true;
    }
}
function reformatZIPCode (ZIPString)
{   if (ZIPString.length == 5) return ZIPString;
    else return (reformat (ZIPString, "", 5, "-", 4));
}
function checkZIPCode (theField, emptyOK,canadaOK)
{   if (checkZIPCode.arguments.length == 1) {emptyOK = defaultEmptyOK};
	if (checkZIPCode.arguments.length == 2) {canadaOK = false};
	
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    { var normalizedZIP = stripCharsInBag(theField.value, ZIPCodeDelimiters)
      if (!isZIPCode(normalizedZIP, false,canadaOK)) 
      {  if(canadaOK == true)
         {iZIPCode = "This field must be a 5 or 9 digit U.S. ZIP Code (like 94043) or 6 digit Canada ZIP Code (like 940434). Please re-enter it now."}
         return warnInvalid (theField, iZIPCode);
         }
      else 
      {  if(canadaOK == false ||theField.value.length == 9 ) 
		  {
           theField.value = reformatZIPCode(normalizedZIP)
           }
         return true;
      }
    }
}
function reformatUSPhone (USPhone)
{   return (reformat (USPhone,"(", 3, ")", 3, "-", 4))
}
function checkUSPhone (theField, emptyOK)
{   
	if (checkUSPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
	
    else
    {  var normalizedPhone = stripCharsInBag(theField.value, phoneNumberDelimiters)
       if (!isUSPhoneNumber(normalizedPhone, false)) 
          return warnInvalid (theField, iUSPhone);
       else 
       {  theField.value = reformatUSPhone(normalizedPhone)
          return true;
       }
    }
}
function checkInternationalPhone (theField, emptyOK)
{   if (checkInternationalPhone.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  if (!isInternationalPhoneNumber(theField.value, false)) 
          return warnInvalid (theField, iWorldPhone);
       else return true;
    }
}
function checkEmail (theField, emptyOK)
{   if (checkEmail.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else if (!isEmail(theField.value, false)) 
       return warnInvalid (theField, iEmail);
    else return true;
}
function reformatSSN (SSN)
{   return (reformat (SSN, "", 3, "-", 2, "-", 4))
}
function checkSSN (theField, emptyOK)
{   if (checkSSN.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    else
    {  var normalizedSSN = stripCharsInBag(theField.value, SSNDelimiters)
       if (!isSSN(normalizedSSN, false)) 
          return warnInvalid (theField, iSSN);
       else 
       {  
          theField.value = reformatSSN(normalizedSSN)
          return true;
       }
    }
}
function checkYear (theField, emptyOK)
{   if (checkYear.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isYear(theField.value, false)) 
       return warnInvalid (theField, iYear);
    else return true;
}
function checkMonth (theField, emptyOK)
{   if (checkMonth.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isMonth(theField.value, false)) 
       return warnInvalid (theField, iMonth);
    else return true;
}
function checkDay (theField, emptyOK)
{   if (checkDay.arguments.length == 1) emptyOK = defaultEmptyOK;
    if ((emptyOK == true) && (isEmpty(theField.value))) return true;
    if (!isDay(theField.value, false)) 
       return warnInvalid (theField, iDay);
    else return true;
}
function isDigit(theDigit) 
{ 
	var digitArray = new Array('0','1','2','3','4','5','6','7','8','9'),j; 
	for (j = 0; j < digitArray.length; j++) 
	{if (theDigit == digitArray[j]) 
	return true 
	} 
	return false 
} 
function isPositiveInteger(theString) 
{ 
		var theData = new String(theString) 
		if (!isDigit(theData.charAt(0))) 
		if (!(theData.charAt(0)== '+')) 
		return false 
		for (var i = 1; i < theData.length; i++) 
		if (!isDigit(theData.charAt(i))) 
		return false 
		return true 
} 
function isDate(s,f) 
{
	var a1=s.split("/"); 
	var a2=s.split("-"); 
	var e=true; 

	if ((a1.length!=3) && (a2.length!=3)) 
		{ 
			e=false; 
		} 
		else 
		{
			if (a1.length==3) 
				var na=a1; 
			if (a2.length==3) 
				var na=a2; 
			if (isPositiveInteger(na[0]) && isPositiveInteger(na[1]) && isPositiveInteger(na[2])) 
			{
				if (f==1) 
				{
					var d=na[1],m=na[0]; 
				} 
				else 
				{
					var d=na[0],m=na[1]; 
				} 
				var y=na[2]; 
				if (((e) && (y<1000)||y.length>4)) 
					e=false 
				if (e) 
				{ 
					v=new Date(m+"/"+d+"/"+y); 
					if (v.getMonth()!=m-1) 
						e=false; 
				} 
			} 
			else 
			{ 
				e=false; 
			} 
		} 
	return e 
} 
function checkDateString(theStringDate,stringZone,emptyOK) 
{ 
	var s=theStringDate.value; 
	var zone=1;
	if(stringZone=='US')	zone=1;
	if(stringZone=='BR')	zone=0;

	if ((emptyOK == false) && isEmpty(s) )
		{
			alert("The field is mandatory");
			return false;
		}
	var a1=s.split("/"); 
	var a2=s.split("-"); 
	var e=true; 

	if ((a1.length!=3) && (a2.length!=3)) 
		{ 
			e=false; 
		} 
		else 
		{
			if (a1.length==3) 
				var na=a1; 
			if (a2.length==3) 
				var na=a2; 
			if (isPositiveInteger(na[0]) && isPositiveInteger(na[1]) && isPositiveInteger(na[2])) 
			{
				if (zone==1) 
				{
					var d=na[1],m=na[0]; 
				} 
				else 
				{
					var d=na[0],m=na[1]; 
				} 
				var y=na[2]; 
				if (((e) && (y<1000)||y.length>4)) 
					e=false 
				if (e) 
				{ 
					v=new Date(m+"/"+d+"/"+y); 
					if (v.getMonth()!=m-1) 
						e=false; 
				} 
			} 
			else 
			{ 
				e=false; 
			} 
		} 
	if (e)
		{
			return true;  
		}
	else 
	{
		alert('The input date value do not form a valid date.  Please re-enter them now.'); 
		theStringDate.focus();
		return false;
	}
} 
function checkDate (yearField, monthField, dayField, labelString, OKtoOmitDay)
{   
    if (checkDate.arguments.length == 4) OKtoOmitDay = false;
    if (!isYear(yearField.value)) return warnInvalid (yearField, iYear);
    if (!isMonth(monthField.value)) return warnInvalid (monthField, iMonth);
    if ( (OKtoOmitDay == true) && isEmpty(dayField.value) ) return true;
    else if (!isDay(dayField.value)) 
       return warnInvalid (dayField, iDay);
    if (isDate (yearField.value, monthField.value, dayField.value))
       return true;
    alert (iDatePrefix + labelString + iDateSuffix)
    return false
}
function getRadioButtonValue (radio)
{   for (var i = 0; i < radio.length; i++)
    {   if (radio[i].checked) { break }
    }
    return radio[i].value
}
function checkCreditCard (cardType, theField)
{   
var normalizedCCN = stripCharsInBag(theField.value, creditCardDelimiters)

if (!isCardMatch(cardType, normalizedCCN)) 
       return warnInvalid (theField, iCreditCardPrefix + cardType + iCreditCardSuffix);
    else 
    {  theField.value = normalizedCCN
       return true
    }
}
function isCreditCard(st) {
  // Encoding only works on cards with less than 19 digits
  if (st.length > 19)
    return (false);

  sum = 0; mul = 1; l = st.length;
  for (i = 0; i < l; i++) {
    digit = st.substring(l-i-1,l-i);
    tproduct = parseInt(digit ,10)*mul;
    if (tproduct >= 10)
      sum += (tproduct % 10) + 1;
    else
      sum += tproduct;
    if (mul == 1)
      mul++;
    else
      mul--;
  }
  if ((sum % 10) == 0)
    return (true);
  else
    return (false);

} 
function isVisa(cc)
{
  if (((cc.length == 16) || (cc.length == 13)) &&
      (cc.substring(0,1) == 4))
    return isCreditCard(cc);
  return false;
}
function isMasterCard(cc)
{
  firstdig = cc.substring(0,1);
  seconddig = cc.substring(1,2);
  if ((cc.length == 16) && (firstdig == 5) &&
      ((seconddig >= 1) && (seconddig <= 5)))
    return isCreditCard(cc);
  return false;

}
function isAmericanExpress(cc)
{
  firstdig = cc.substring(0,1);
  seconddig = cc.substring(1,2);
  if ((cc.length == 15) && (firstdig == 3) &&
      ((seconddig == 4) || (seconddig == 7)))
    return isCreditCard(cc);
  return false;

} 
function isDinersClub(cc)
{
  firstdig = cc.substring(0,1);
  seconddig = cc.substring(1,2);
  if ((cc.length == 14) && (firstdig == 3) &&
      ((seconddig == 0) || (seconddig == 6) || (seconddig == 8)))
    return isCreditCard(cc);
  return false;
}
function isCarteBlanche(cc)
{
  return isDinersClub(cc);
}
function isDiscover(cc)
{
  first4digs = cc.substring(0,4);
  if ((cc.length == 16) && (first4digs == "6011"))
    return isCreditCard(cc);
  return false;
} 
function isEnRoute(cc)
{
  first4digs = cc.substring(0,4);
  if ((cc.length == 15) &&
      ((first4digs == "2014") ||
       (first4digs == "2149")))
    return isCreditCard(cc);
  return false;
}
function isJCB(cc)
{
  first4digs = cc.substring(0,4);
  if ((cc.length == 16) &&
      ((first4digs == "3088") ||
       (first4digs == "3096") ||
       (first4digs == "3112") ||
       (first4digs == "3158") ||
       (first4digs == "3337") ||
       (first4digs == "3528")))
    return isCreditCard(cc);
  return false;

} 
function isAnyCard(cc)
{
  if (!isCreditCard(cc))
    return false;
  if (!isMasterCard(cc) && !isVisa(cc) && !isAmericanExpress(cc) && !isDinersClub(cc) &&
      !isDiscover(cc) && !isEnRoute(cc) && !isJCB(cc)) {
    return false;
  }
  return true;
} 
function isCardMatch (cardType, cardNumber)
{

	cardType = cardType.toUpperCase();
	var doesMatch = true;

	if ((cardType == "VISA") && (!isVisa(cardNumber)))
		doesMatch = false;
	if ((cardType == "MASTERCARD") && (!isMasterCard(cardNumber)))
		doesMatch = false;
	if ( ( (cardType == "AMERICANEXPRESS") || (cardType == "AMEX") )
                && (!isAmericanExpress(cardNumber))) doesMatch = false;
	if ((cardType == "DISCOVER") && (!isDiscover(cardNumber)))
		doesMatch = false;
	if ((cardType == "JCB") && (!isJCB(cardNumber)))
		doesMatch = false;
	if ((cardType == "DINERS") && (!isDinersClub(cardNumber)))
		doesMatch = false;
	if ((cardType == "CARTEBLANCHE") && (!isCarteBlanche(cardNumber)))
		doesMatch = false;
	if ((cardType == "ENROUTE") && (!isEnRoute(cardNumber)))
		doesMatch = false;
	return doesMatch;

} 
function IsCC (st) {
    return isCreditCard(st);
}

function IsVisa (cc)  {
  return isVisa(cc);
}

function IsVISA (cc)  {
  return isVisa(cc);
}

function IsMasterCard (cc)  {
  return isMasterCard(cc);
}

function IsMastercard (cc)  {
  return isMasterCard(cc);
}

function IsMC (cc)  {
  return isMasterCard(cc);
}

function IsAmericanExpress (cc)  {
  return isAmericanExpress(cc);
}

function IsAmEx (cc)  {
  return isAmericanExpress(cc);
}

function IsDinersClub (cc)  {
  return isDinersClub(cc);
}

function IsDC (cc)  {
  return isDinersClub(cc);
}

function IsDiners (cc)  {
  return isDinersClub(cc);
}

function IsCarteBlanche (cc)  {
  return isCarteBlanche(cc);
}

function IsCB (cc)  {
  return isCarteBlanche(cc);
}

function IsDiscover (cc)  {
  return isDiscover(cc);
}

function IsEnRoute (cc)  {
  return isEnRoute(cc);
}

function IsenRoute (cc)  {
  return isEnRoute(cc);
}

function IsJCB (cc)  {
  return isJCB(cc);
}

function IsAnyCard(cc)  {
  return isAnyCard(cc);
}

function IsCardMatch (cardType, cardNumber)  {
  return isCardMatch (cardType, cardNumber);
}
function isUrl (s)
{
   if (isEmpty(s)) 
       if (isUrl.arguments.length == 1) return defaultEmptyOK;
       else return (isUrl.arguments[1] == true);
    
    else {
       return reUrl.test(s)
    }
}
function formatNumber(inputNumber)
{
	var textFormat = "";
	var t=0;
	var str=""; 
	var flag =1;// to check whether number is having 3 or 6  or 9 characters.
	str=inputNumber;
	 var length = str.length;
	if(length % 3 == 0)
	{
		flag = 0;
	}	

	if (str.length != 0)
	{
		for (var k = str.length-1; k>=0 ; k--)
		{
			t++;
			if ((t % 3 == 0))
			{
				textFormat = "," + str.substr(k,1) + textFormat; 
			} 
			else 
			{
				textFormat =  str.substr(k,1) + textFormat; 
			}
		} 
		if(!flag) 
		return textFormat.substr(1,textFormat.length);
		return textFormat;
	}
}
function textCounter(field, countfield, maxlimit,replychars) {
if (field.value.length > (maxlimit+replychars)) // if too long...trim it!
	field.value = field.value.substring(0, (maxlimit+replychars));
else 
	var charsLeft =(maxlimit - (field.value.length-replychars));
	if (charsLeft  > maxlimit){
		charsLeft = maxlimit;
	}
		
	 
	countfield.value = "You have " + charsLeft  + ' characters left ';
}
function validate(month,day,year)
{
   var chk    = 0;
   var maxDay = 0;
   var dd = day.value; // day
   var mm = month.value; // month
   var yy = year.value; // year
   var _dd=parseInt(dd);
   var _mm=parseInt(mm);
   var _yy=parseInt(yy);
   if(dd!=_dd){day="";}
   if(mm!=_mm){month="";}
   if(yy!=_yy){year="";}
   maxDay = max_day(mm, yy);  
   if(dd!=_dd && mm!=_mm && yy!=_yy)   { chk = 1;}
   if((dd <= 0) || (dd > maxDay)) { chk = 1;}
   else if((mm <= 0) || (mm > 12))     { chk = 1;}
   else if((yy <= 0))                  { chk = 1;} 

   if(chk) {  return false; }
   else    { return true;}

}
function max_day(mn, yr)
{
  var mDay;
  if((mn == 4) || (mn == 6) || (mn == 9) || (mn == 11))
  { 
    mDay = 30;
  }
  else if(mn == 2)
  {
    mDay = isLeapYear(yr) ? 29 : 28;    
  }
  else
  {
    mDay = 31;
  }
  return mDay; 
}
function isLeapYear(yr)
{
  if      (yr % 4 != 0)   return false;
  else if (yr % 400 == 0) return true;
  else if (yr % 100 == 0) return false;
  else                    return true;
}
function trim(str)
{
	return str.replace(/^\s*|\s*$/g,"");
}
function dateCheck(strDate)
{
	var reg = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
	return reg.test(strDate);
}
function insertString(fullstring, insertstring, position)
{
	return fullstring.substring(0, position)  + insertstring + fullstring.substring(position, fullstring.length);
}