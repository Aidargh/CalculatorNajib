$(document).ready(function () {
    $("#calculate-commodity").click(function () {
        const k = parseFloat($("#constantC").val());
        const c = parseFloat($("#disc-mhr-c").val());
        const b = parseFloat($("#baseline-disc-commodity").val());
        const m = parseFloat($("#baseline-disc-mhrs").val());

        const commodityValue = (k * c) / m;
        const commodityRatio = b / commodityValue;
        const newBaselineDiscCommodity = b * commodityRatio;
        const projectDiscCommodity = newBaselineDiscCommodity + commodityValue;

        $("#commodity-value").val(commodityValue.toFixed(2));
        $("#commodity-ratio").val(commodityRatio.toFixed(2));
        $("#new-baseline-disc-commodity").val(newBaselineDiscCommodity.toFixed(2));
        $("#project-disc-commodity").val(projectDiscCommodity.toFixed(2));
        
    });
});

document.getElementById("calculate-commodity2").addEventListener("click", function () {
    var constantC2 = parseFloat(document.getElementById("constantC2").value);
    var discMhrC2 = parseFloat(document.getElementById("disc-mhr-c2").value);
    var baselineDiscCommodity2 = parseFloat(document.getElementById("baseline-disc-commodity2").value);
    var baselineDiscMhrs2 = parseFloat(document.getElementById("baseline-disc-mhrs2").value);
   
    var commodityValue2 = constantC2 * discMhrC2;
    var commodityRatio2 = commodityValue2 / baselineDiscCommodity2;
    var newBaselineDiscCommodity2 = commodityRatio2 * baselineDiscMhrs2;
    var projectDiscCommodity2 = commodityRatio2 * discMhrC2;
   
    document.getElementById("commodity-value2").value = commodityValue2.toFixed(2);
    document.getElementById("commodity-ratio2").value = commodityRatio2.toFixed(2);
    document.getElementById("new-baseline-disc-commodity2").value = newBaselineDiscCommodity2.toFixed(2);
    document.getElementById("project-disc-commodity2").value = projectDiscCommodity2.toFixed(2);
   });