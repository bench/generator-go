package hello

import (
	"testing"
)

func TestSayHello(t *testing.T) {
	actual := BuildHello()
	expected := "Hello, world."
	if expected != actual {
		t.Errorf("Error occurred while testing SayHello: '%s' != '%s'", expected, actual)
	}
}
