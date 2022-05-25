const MissionCommander = require('./../app/MissionCommander');

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander object', () => {
        const myMissionCommander = new MissionCommander("Woopa!")
        expect(myMissionCommander.name).toBe("Woopa!");
    })
})