package lists

func ListPopInt(list *[]int) int {
	val := (*list)[len((*list))-1]
	*list = (*list)[:len((*list))-1]
	return val
}
