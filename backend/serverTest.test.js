process.env.MY_VARIABLE = "./testRecords.json";
const app = require("./myApi");
const supertest = require("supertest");
const request = supertest(app);
const fs = require("fs").promises;
const testPostObj = { name: "Eve" };

describe("Server tests", () => {
  it("Gets data from server", async (done) => {
    const res = await request.get("/api/scores");
    expect(res.status).toBe(200);
    expect(res.body.length >= 1).toBe(true);
    done();
  });

  it("adds a new record then gets all records and checks if it was added ", async (done) => {
    const postRes = await request.post("/api/scores").send(testPostObj);
    const getRes = await request.get("/api/scores");
    expect(postRes.status).toBe(200);
    expect(getRes.body[1].name).toBe(testPostObj.name);
    fs.writeFile("testRecords.json", JSON.stringify([getRes.body[0]])); // removes test object from testRecords
    done();
  });
});
