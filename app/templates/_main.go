package main

import(
"fmt"
"<%=myrepoUrl%>/<%=myappName%>/hello"
) 

func main() {
	fmt.Println(hello.BuildHello())
}