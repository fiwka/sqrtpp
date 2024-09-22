// Класс для хранения информации, связанной с входными данными (тип строго не определён специально)
class input_object {
    constructor(is_analytical, precision, radical) {
        this.is_analytical = is_analytical;
        this.precision = precision;
        this.radical = radical;
    }
}

const INPUT_FIELDS = Object.freeze(new input_object(
    document.getElementById("approximation_radio_2"),
    document.getElementById("precision_textbox"),
    document.getElementById("radical_textbox")
))

document.querySelector(".calc_form").addEventListener("submit", do_magic);

// Входная точка программы
function do_magic(e) {
    e.preventDefault()
    const input = read_input()

    let result;
    try {
        if (input.radical === "0") {
            result = 0
        } else if (input.is_analytical) {
            result = analyticSqrt(input.radical)
        } else {
            result = approximateSqrt(input.radical, input.precision)
        }
    } catch (error) {
        if (error.precision) {
            alert(SELECTED_LANGUAGE.precision_error)
        } else {
            alert(SELECTED_LANGUAGE.radical_error)
        }
        return;
    }

    update_view(result, input.is_analytical)
}

/**
 * Читает данные из формы
 * @returns {input_object}
 */
function read_input() {
    let input = new input_object(
        INPUT_FIELDS.is_analytical.checked,
        INPUT_FIELDS.precision.value,
        INPUT_FIELDS.radical.value
    )
    input = beautify_input(input)
    return input
}

/**
 * Преобразует строки согласно шаблону
 * @param {input_object} input
 * @returns {input_object}
 */
function beautify_input(input) {
    input.radical = beautify_number_string(input.radical)
    input.precision = beautify_number_string(input.precision)
    return input;
}

/**
 * Преобразует строку согласно шаблону
 * @param {string} str
 * @returns {string}
 */
function beautify_number_string(str) {
    str = str.replaceAll(" ", "")
    str = str.replaceAll(",", ".")
    return str
}

// Функция отрисовки
function update_view(value, is_analytical) {
    const result_field = document.querySelector(".result");

    if (value === 0) {
        result_field.innerHTML = "0"
    } else if (is_analytical) {
        console.log(value);
        
        let result = "± "
        if (!value.outRoot.eq(new Big("1")))
            result += value.outRoot
        if (!value.inRoot.eq(new Big("1")))
            result += " <span class=\"root\"><span class=\"radicand\">" + value.inRoot + "</span></span>"
        if (value.isComplex)
            result += " i"
        result_field.innerHTML = result
    } else {
        result_field.innerHTML = "± " + parse_value(value.number) + (value.isComplex ? " i" : "")
    }
}

function parse_value(val) {
    let result = val.round(0, Big.roundDown);
    let mantiss = val.minus(result);
    let str = mantiss.valueOf().substring(2);

    var parts = str.match(/.{1,3}/g);
    var new_value = parts?.join(" ") ?? "";
    if (new_value !== "")
        new_value = "." + new_value;

    return result.valueOf() + new_value;
}