package hello

import (
	"testing";
)

func TestSayHello(t *testing.T) {
	actual := BuildHello()
	expected := "Hello, world."
    if expected != actual {
		t.Errorf("%s: '%s' != '%s'", message, expected, actual);
    }
}

func BenchmarkBuildHiAndThenHello(b *testing.B) {
	BuildHi()
	BuildHello()
}