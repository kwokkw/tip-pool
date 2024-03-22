describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });

  it("should create table row element", function () {
    submitServerInfo();
    updateServerTable();

    // expect server name
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
    // expect earnings
    expect(tipAverage).toEqual("0");
  });

  afterEach(function () {
    // teardown logic
    //serverId = 0;
    //allServers = {};
    //serverTbody.innerHTML = "";
  });
});
