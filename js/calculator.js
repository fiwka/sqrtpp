// Класс для хранения информации, связанной с входными данными (тип строго не определён специально)
class input_object {
    constructor(is_analytical, precision, radical) {
        this.is_analytical = is_analytical;
        this.precision = precision;
        this.radical = radical;
    }
}

const INPUT_FIELDS = new input_object(
    document.getElementById("is_analytical_checkbox"),
    document.getElementById("precision_textbox"),
    document.getElementById("radical_texbox")
)

document.querySelector(".calc_form").addEventListener("submit", do_magic);

// Входная точка программы
function do_magic(e) {
    e.preventDefault()
    const input = read_input()
    const parsed_input = parse_input(input)

    if (parsed_input.radical === new Big("0")) {
        update_view(0, false)
        return
    }

    let result;
    if (parsed_input.is_analytical) {
        result = analyticSqrt(parsed_input.radical)
    } else {
        result = approximateSqrt(parsed_input.radical, parsed_input.precision)
    }

    update_view(result, parsed_input.is_analytical)
}

// Читает данные из формы.
function read_input() {
    return new input_object(
        INPUT_FIELDS.is_analytical.checked,
        INPUT_FIELDS.precision.value,
        INPUT_FIELDS.radical.value
    );
}

// Преобразует данные из строковых типов в объекты
function parse_input(input) {
    return new input_object(
        input.is_analytical,
        parseInput(input.precision),
        parseInput(input.radical)
    );
}

function update_view(value, is_analytical) {
    const result_field = document.querySelector(".result");

    if (value === 0) {
        result_field.innerHTML = "0"
    } else if (is_analytical) {
        result_field.innerHTML = "+- " + value.outRoot + " + <span class=\"root\"><span class=\"radicand\">" + value.inRoot + (value.isComplex ? " i" : "")
    }
}
