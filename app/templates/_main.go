package main

import(
"fmt"
"<%=repoUrl%>/hello"
)

func main() {
	fmt.Println(hello.BuildHello())
}
