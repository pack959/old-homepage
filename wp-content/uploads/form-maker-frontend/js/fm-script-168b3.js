    var fm_currentDate = new Date();
    var FormCurrency_1 = '';
    var FormPaypalTax_1 = '0';
    var check_submit1 = 0;
    var check_before_submit1 = {};
    var required_fields1 = ["2","3","7","8","5"];
    var labels_and_ids1 = {"1":"type_editor","2":"type_name","3":"type_submitter_mail","7":"type_text","8":"type_text","4":"type_textarea","5":"type_captcha","6":"type_submit_reset"};
    var check_regExp_all1 = [];
    var check_paypal_price_min_max1 = [];
    var file_upload_check1 = [];
    var spinner_check1 = [];
    var scrollbox_trigger_point1 = '20';
    var header_image_animation1 = '';
    var scrollbox_loading_delay1 = '0';
    var scrollbox_auto_hide1 = '1';
         function before_load1() {
     
}

 function before_submit1() {
}

 function before_reset1() {
     
}
    function onload_js1() {
  jQuery("#wd_captcha1").click(function() {captcha_refresh("wd_captcha","1")});
  jQuery("#_element_refresh1").click(function() {captcha_refresh("wd_captcha","1")});
  captcha_refresh("wd_captcha", "1");
    }
    function condition_js1() {
    }
    function check_js1(id, form_id) {
    if (id != 0) {
    x = jQuery("#" + form_id + "form_view"+id);
    }
    else {
    x = jQuery("#form"+form_id);
    }    }
    function onsubmit_js1() {
    
  var disabled_fields = "";
  jQuery("#form1 div[wdid]").each(function() {
    if(jQuery(this).css("display") == "none") {
      disabled_fields += jQuery(this).attr("wdid");
      disabled_fields += ",";
    }
    if(disabled_fields) {
      jQuery("<input type=\"hidden\" name=\"disabled_fields1\" value =\""+disabled_fields+"\" />").appendTo("#form1");
    }
  });    }
    jQuery(window).on('load', function () {
    if (jQuery('form#form1 .wdform_section').length > 0) {
      formOnload(1);
    }
    });
    form_view_count1 = 0;
    jQuery(document).ready(function () {
    if (jQuery('form#form1 .wdform_section').length > 0) {
      fm_document_ready(1);
    }
    });
    