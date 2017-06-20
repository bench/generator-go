package hello

import (
	"testing";
)

func TestSayHello(t *testing.T) {
	actual := BuildHello()
	expected := "Hello, world."
    if expected != actual {
		t.Errorf("Error occured while testing sayhello: '%s' != '%s'", expected, actual);
    }
}
