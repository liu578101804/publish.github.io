var securityCode = "";

function getResponse(resp) {
    securityCode = resp;
}

// 添加订阅
function addSubscription() {
    if (securityCode == "") {
        toastr.error('请先进行人机验证', "Inconceivable");
        return
    } else {
        var email = $("#email").val();
        request(email);
    }
}

function request(email) {
    $.ajax({
        type: "post",
        dataType: "json",
        url: "http://39.96.176.74:8025/ebook/email/subscription",
        data: {
            email: email,
            code: securityCode
        },
        success: function () {
            toastr.success('订阅成功', "Success");
        }
    });
}


// toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
// toastr.success('Have fun storming the castle!', 'Miracle Max Says')
// toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')
// toastr.clear()