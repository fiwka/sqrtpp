const NUMBER_REGEX = /^-?\d+(.\d+)?$/

function parseInput(str, big) {
    if (!NUMBER_REGEX.test(str))
        return alert("error")

    return big ? new Big(str) : +str
}

function approximateSqrt(x, precision) {
    x = parseInput(x, true)
    Big.DP = parseInput(precision)
    return {
        isComplex: x.lt(0),
        number: x.abs().sqrt()
    }
}

function primeFactorize(x) {
    const factors = {}
    let i = new Big('2')

    while (!x.eq(1)) {
        while (x.mod(i).eq(0)) {
            if (factors[i] === undefined)
                factors[i] = 0

            factors[i]++
            x = x.div(i)
        }
        i = i.plus(1)
    }

    return factors
}

function findInOutRoot(x) {
    let e = 0
    while (!x.eq(x.round(0, Big.roundDown))) {
        x = x.times(10)
        e--
    }
    const tens = e < 0 ? (Math.abs(e) % 2 === 0 ? Math.abs(e) / 2 : (Math.abs(e) - 1) / 2) : 0
    e += tens * 2
    const factors = primeFactorize(x)
    const outFactors = {}
    const inFactors = {}
    if (tens > 0)
        outFactors[10] = -tens
    if (e < 0)
        inFactors[10] = e

    for ([factor, count] of Object.entries(factors)) {
        const out = count % 2 === 0 ? count / 2 : (count - 1) / 2
        outFactors[factor] = out

        if (count - (2 * out) > 0)
            inFactors[factor] = count - (2 * out)
    }

    let outRoot = new Big('1')
    let inRoot = new Big('1')

    for ([factor, count] of Object.entries(outFactors)) {
        outRoot = outRoot.times(new Big(factor).pow(count))
    }

    for ([factor, count] of Object.entries(inFactors)) {
        console.log(factor, count)
        inRoot = inRoot.times(new Big(factor).pow(count))
    }

    return { outRoot, inRoot }
}

function analyticSqrt(x) {
    Big.DP = parseInput(20)
    x = parseInput(x, true)
    const parts = findInOutRoot(x.abs())
    return {
        isComplex: x.lt(0),
        outRoot: parts.outRoot,
        inRoot: parts.inRoot
    }
}

const test = analyticSqrt('-2.5')

console.log(test.outRoot + " in " + test.inRoot)
console.log(test)