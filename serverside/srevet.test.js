process.env.RECORDS_VARIABLE="serverside/testRecords.json"
const fs=require("fs")
const supertest=require("supertest");
const app=require("./tic-tac-toe-server");
let request=supertest(app);

const INITIAL_RECORD={"name":"initial","date":"2020-08-24T08:30:33.254Z","duration":"8.535 s","id":1}
describe("checking for GET requests and POST requests",()=>{
    const TEST_RECORD={name:"check", date:`${new Date()}`, duration:"10.34s"}
    it("should post a new record object",async ()=>{
        const res=await request.post("/api/v1/records").send(TEST_RECORD)
        expect(res.status).toBe(200)
        TEST_RECORD.id=2
        expect(res.body[res.body.length-1]).toEqual(TEST_RECORD)
    })
    it("should get the full array of records",async ()=>{
        const res=await request.get("/api/v1/records")
        expect(res.status).toBe(200)
        expect(res.body).toEqual([INITIAL_RECORD,TEST_RECORD])
    })
})

afterAll(()=>fs.writeFileSync(process.env.RECORDS_VARIABLE,`[${JSON.stringify(INITIAL_RECORD)}]`))
