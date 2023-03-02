package main

import(
"fmt"
"<%=moduleName%>/hello"
)

func main() {
	fmt.Println(hello.BuildHello())
}
