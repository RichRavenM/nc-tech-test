const {generateSizesArray} = require("../../utils")


describe("generateSizesArray", ()=> {
    it("returns an empty array when input is empty array",()=> {
        expect(generateSizesArray([])).toEqual([])
    })
    it("output array does not reference input array", ()=> {
        const input = []
        expect(generateSizesArray(input)).not.toBe(input)
    })
    it("for single entry in input, output contains an object whose id equals the input entry and title is that in full form", ()=> {
        const input = ["sm"]
        const output = generateSizesArray(input)
        expect(output).toHaveLength(1)
        expect(output[0].id).toBe("sm")
        expect(output[0].title).toBe("Small")
    })
    it("array entries that are not sm, md, lg or gt are not processed", ()=> {
        const input = ["add"]
        const output = generateSizesArray(input)
        expect(output).toHaveLength(0)
    })
    it("generates array with appropriate objects for an array of any size", ()=> {
        const input = ["sm", "md", "lg", "gt"]
        const output = generateSizesArray(input)
        expect(output).toHaveLength(4)
        output.forEach(size => {
            expect(size).toHaveProperty("id")
            expect(size).toHaveProperty("title")
        })
    })
    it("input array is not modified", ()=> {
        const input = ["sm", "md", "lg", "gt"]
        generateSizesArray(input)
        expect(input).toEqual(["sm", "md", "lg", "gt"])
    })
})