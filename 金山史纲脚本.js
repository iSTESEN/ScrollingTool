

function stringToNumbers(str) {
    // 检查输入是否只包含字母
    if (!/^[A-Za-z]+$/.test(str)) {
        throw new Error("输入必须只包含字母");
    }

    // 将字符串转换为大写，并映射每个字母到其对应的数字
    return Array.from(str.toUpperCase()).map(letter => letter.charCodeAt(0) - 64);
}
function letterToNumber(letter) {
    // 确保输入是单个大写或小写字母
    if (letter.length !== 1 || !/^[A-Za-z]$/.test(letter)) {
        throw new Error("输入必须是单个字母");
    }
    
    // 将字母转换为大写，并计算其对应的数字
    return letter.toUpperCase().charCodeAt(0) - 64;
}




/**
 * 总配置
 */
var sourc = "第一章"


/**
 * 单选题
 */
var singles = document.getElementsByClassName('mark_item')[0].getElementsByClassName('marBom60 questionLi singleQuesId')


var res = []

for(var i=0; i<singles.length; i++) {
    var a = {}
    a['description'] = singles[i].getElementsByClassName("mark_name colorDeep")[0].innerHTML.split("</span>")[1].trim()
    
    a['correctAnswer'] = singles[i].getElementsByClassName("colorGreen marginRight40 fl") 
    if(a['correctAnswer'].length==0) {
        a['correctAnswer'] = [letterToNumber(singles[i].getElementsByClassName("colorDeep marginRight40 fl")[0].innerHTML.split("</i>")[1].trim())]
    } else {
        a['correctAnswer'] = [letterToNumber(a['correctAnswer'][0].innerHTML.split("</i>")[1].trim())]
    }
    
    
    a['source'] = sourc
    var ops = singles[i].getElementsByClassName("mark_letter colorDeep")[0]
    var options = []
    if(ops != undefined) {
        var lis = ops.getElementsByTagName("li")
        for(var j=0; j<lis.length; j++){
            options.push(lis[j].innerText.match(/^[A-Z]\.\s*(.*)$/)[1])
        }
    }
    a['options'] = options
    res.push(a)
    //console.log(a)
}

res


/**
 * 多选
 */

var multi = document.getElementsByClassName('mark_item')[1].getElementsByClassName('marBom60 questionLi singleQuesId')
res = []
for(var i=0; i<multi.length; i++) {
    // console.log(multi[i]);

    var a = {}
    a['source'] = sourc
    a['description'] = multi[i].getElementsByClassName("mark_name colorDeep")[0].innerHTML.split("</span>")[1].trim()
    
    a['correctAnswer'] = []
    var corAns = multi[i].getElementsByClassName("colorGreen marginRight40 fl")
    if(corAns.length==0) {
        var corAns = multi[i].getElementsByClassName("colorDeep marginRight40 fl")[0].innerHTML.split("</i>")[1].trim()
    } else {
        corAns = corAns[0].innerHTML.split("</i>")[1].trim()
    }
    //console.log(corAns)
    for(var k=0; k<corAns.length; k++) {
        a['correctAnswer'].push(stringToNumbers(corAns[k])[0])
    }
    
    var ops = multi[i].getElementsByClassName("mark_letter colorDeep")[0]
    var options = []
    if(ops != undefined) {
        var lis = ops.getElementsByTagName("li")
        for(var j=0; j<lis.length; j++){
            options.push(lis[j].innerText.match(/^[A-Z]\.\s*(.*)$/)[1])
        }
    }
    a['options'] = options
    res.push(a)
    //console.log(a)
}
res


/**
 * 填空
 */


var blank = document.getElementsByClassName('mark_item')[2].getElementsByClassName('marBom60 questionLi singleQuesId')
res = []
for(var i=0; i<blank.length; i++) {
    var a = {}

    a['source'] = sourc
    a['description'] = blank[i].getElementsByClassName("mark_name colorDeep")[0].innerHTML.split("</span>")[1].trim()
    
    var corAns = blank[i].getElementsByClassName("mark_fill colorGreen")
    if(corAns.length==0) {
        corAns = blank[i].getElementsByClassName("mark_fill colorDeep")[0].innerHTML.split(')')[1].trim().split("</dd>")[0].split('</')[0]
    } else {
        corAns = corAns[0].innerHTML.split(')')[1].trim().split("</dd>")[0].split('</')[0]
    }
    a['correctAnswer'] = corAns

    res.push(a)
    //console.log(a)
}
res