/* Sample input
07:05:45PM
*/
const timeConversion = s => {
	const time12h = s
	const [ , hh, mm, ss, apm] = time12h.match(/(\d{2}):(\d{2}):(\d{2})(\w{2})/)
	
	const _HH      = apm === "PM"  ? +hh + 12 : hh
	const midNight = apm === "AM" && +hh === 12
	const noon     = apm === "PM" && +hh === 12
	const HH       = midNight ? "00" : noon ? "12" : _HH
	
	return `${HH}:${mm}:${ss}`
}

const result = timeConversion("07:45:55PM")
console.log(result)

// Midnight
const result2 = timeConversion("12:45:55AM")
console.log(result2)

// Noon
const result3 = timeConversion("12:45:55PM")
console.log(result3)