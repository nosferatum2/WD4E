/*Add the JavaScript here for the function billingFunction().  
It is responsible for setting and clearing the fields in Billing Information */

function billingFunction(){
	var shName, shZip;
	shName = document.getElementById('shippingName');
	shZip = document.getElementById('shippingZip');

	if (document.getElementById('same').checked){
		document.getElementById('billingName').value = shippingName.value;
		document.getElementById('billingZip').value = shippingZip.value;

	} else{
		document.getElementById('billingName').value = '';
		document.getElementById('billingZip').value = '';
	}
}
