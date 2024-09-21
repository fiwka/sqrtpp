class Lang {
    constructor(lang_name_texbox,
        lang_select_lang_texbox,
        lang_precision_texbox,
        lang_approximate_r_texbox,
        lang_precise_r_texbox,
        lang_radical_texbox,
        lang_enter_texbox,
        lang_result_texbox,
        lang_title_texbox) {
        this.lang_name_texbox = lang_name_texbox;
        this.lang_select_lang_texbox = lang_select_lang_texbox;
        this.lang_precision_texbox = lang_precision_texbox;
        this.lang_approximate_r_texbox = lang_approximate_r_texbox;
        this.lang_precise_r_texbox = lang_precise_r_texbox;
        this.lang_radical_texbox = lang_radical_texbox;
        this.lang_enter_texbox = lang_enter_texbox;
        this.lang_result_texbox = lang_result_texbox;
        this.lang_title_texbox = lang_title_texbox;
    }
}

const LANG_INPUTS = Object.freeze(new Lang(
    document.getElementById("lang_name_texbox"),
    document.getElementById("lang_select_lang_texbox"),
    document.getElementById("lang_precision_texbox"),
    document.getElementById("lang_approximate_r_texbox"),
    document.getElementById("lang_precise_r_texbox"),
    document.getElementById("lang_radical_texbox"),
    document.getElementById("lang_enter_texbox"),
    document.getElementById("lang_result_texbox"),
    document.getElementById("lang_title_texbox"),
));

const LANG_OUTPUTS = Object.freeze(new Lang(
    null,
    document.getElementById("lang_select_label"),
    document.getElementById("precision_textbox_label"),
    document.getElementById("approximation_radio_1_label"),
    document.getElementById("approximation_radio_2_label"),
    document.getElementById("radical_texbox_label"),
    document.getElementById("submit_button"),
    document.getElementById("result_label"),
    document.querySelector("title")
))

const LANG_RU = Object.freeze(new Lang(
    "Русский",
    "Выберите язык",
    "Укажите точность вычислений",
    "Приблизительные вычисления",
    "Точные вычисления",
    "Введите подкоренное выражение",
    "Ввести",
    "Результат вычислений",
    "Программный продукт, который вычисляет квадратный корень числа"
));
const LANG_EN = Object.freeze(new Lang(
    "English",
    "Select language",
    "Specify the accuracy of calculations",
    "Approximate calculations",
    "Precise calculations",
    "Enter the radical expression",
    "Enter",
    "Calculation result",
    "A software product that calculates the square root of a number"
));
const LANG_SP = Object.freeze(new Lang(
    "Español",
    "Seleccione idioma",
    "Especificar la precisión de los cálculos",
    "Cálculos aproximados",
    "Cálculos precisos",
    "Introduzca la expresión radical",
    "Ingresar",
    "Resultado del cálculo",
    "Un producto de software que calcula la raíz cuadrada de un número"
));
const LANG_ZH = Object.freeze(new Lang(
    "中国人",
    "选择语言",
    "指定计算的精度",
    "近似计算",
    "精确计算",
    "输入根式表达式",
    "进入",
    "计算结果",
    "计算数字平方根的软件产品"
));

function apply_language(lang) {
    const outputs = Object.values(LANG_OUTPUTS);
    const lang_arr = Object.values(lang);
    for (let i = 0; i < outputs.length; i++) {
        const element = outputs[i];
        if (element === null)
            continue;
        
        element.innerHTML = lang_arr[i];
    }
}

function initLangSystem() {
    let langs = JSON.parse(localStorage.getItem("langs"));
    if (langs === null) {
        langs = {}
        langs[LANG_EN.lang_name_texbox] = LANG_EN;
        langs[LANG_RU.lang_name_texbox] = LANG_RU;
        langs[LANG_SP.lang_name_texbox] = LANG_SP;
        langs[LANG_ZH.lang_name_texbox] = LANG_ZH;
    
        localStorage.setItem("langs", JSON.stringify(langs));
    }
    
    const SELECT = document.getElementById("lang_select");
    SELECT.innerHTML = "";
    Object.values(langs).forEach(lang => {
        const option = document.createElement("option");
        const text = document.createTextNode(lang.lang_name_texbox);
        option.appendChild(text);
        option.value = lang.lang_name_texbox;
        SELECT.appendChild(option);
    });
    
    apply_language(LANG_EN);
    SELECT.addEventListener("change", e => apply_language(langs[e.target.value]));
}

function addlang(e) {
    e.preventDefault();

    const values = [];
    Object.values(LANG_INPUTS).forEach(param_input_object => {
        values.push(param_input_object.value);
    });
    const new_lang = new Lang(...values);
    let langs = JSON.parse(localStorage.getItem("langs"));
    if (Object.keys(langs).includes(new_lang.lang_name_texbox)) {
        alert("Language with this name alredy exists! Please try another name.");
        return;
    }

    langs[new_lang.lang_name_texbox] = new_lang;
    localStorage.setItem("langs", JSON.stringify(langs));

    initLangSystem()
}

initLangSystem()
document.getElementById("lang_creation_form").addEventListener("submit", addlang)