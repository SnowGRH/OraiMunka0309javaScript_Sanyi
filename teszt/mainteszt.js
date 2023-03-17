QUnit.module("leptetes metódus tesztelése", function () {
  QUnit.test("létezik sanyiLeptetes?", function (assert) {
    assert.ok(sanyiLeptetes, "Létezik a sanyileptetes");
  });
  QUnit.test("Function a sanyiLeptetes", function (assert) {
    assert.ok(typeof sanyiLeptetes == "function", "A sanyiLeptetes fügvény");
  });
  QUnit.test("sanyiLeptetes(1,2)", function (assert) {
    assert.equal(sanyiLeptetes(1, 2), 3);
  });
  QUnit.test("sanyiLeptetes(1,0)", function (assert) {
    assert.equal(sanyiLeptetes(1, 0), 1);
  });
  QUnit.test("sanyiLeptetes(1,lista[-1])", function (assert) {
    assert.equal(sanyiLeptetes(1, lista.length - 1), 0);
  });
  QUnit.test("sanyiLeptetes(1,lista[-1])", function (assert) {
    assert.equal(sanyiLeptetes(1, lista.length - 1), 0);
  });
  QUnit.test("sanyiLeptetes(-1,2)", function (assert) {
    assert.equal(sanyiLeptetes(-1, 2), 1);
  });
  QUnit.test("sanyiLeptetes(-1,0)", function (assert) {
    assert.equal(sanyiLeptetes(-1, 0), lista.length - 1);
  });
  QUnit.test("sanyiLeptetes(-1,hosz-1)", function (assert) {
    assert.equal(sanyiLeptetes(-1, lista.length - 1), lista.length - 2);
  });
});

QUnit.module("SanyiKisképek tesztelése", function () {
  QUnit.test("létezik SanyiKisKepek?", function (assert) {
    assert.ok(SanyiKisKepek, "Létezik a sanyileptetes");
  });
  QUnit.test("Teljes lista", function (assert) {
    lista = [
        "kepek/alszik.jpg",
        "kepek/bocsok.jpg",
        "kepek/cirkusz.jpg"
      ];
    assert.equal(SanyiKisKepek(lista), '<div><img src="kepek/alszik.jpg" alt=""></div><div><img src="kepek/bocsok.jpg" alt=""></div><div><img src="kepek/cirkusz.jpg" alt=""></div>');
  });
});
QUnit.module('elemek megjelenés az oldalon', function() {
    lista = [
        "kepek/alszik.jpg",
        "kepek/bocsok.jpg",
        "kepek/cirkusz.jpg",
        "kepek/eszik.jpg",
        "kepek/integet.jpg",
        "kepek/maci.jpg",
        "kepek/medve.jpg",
        "kepek/taj.jpg",
      ];
    QUnit.test('kisképek száma megegyeik a lista eleminek  számával', 
    function(assert) {
      document.querySelectorAll("article img").length , lista.length
    });
    QUnit.test('kisképek meg jelnek az oldalon', 
    function(assert) {
      document.querySelectorAll("article img").length , lista.length
    });
  });