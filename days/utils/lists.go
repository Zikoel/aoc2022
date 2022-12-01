package utils

// BinarySplit 05
func BinarySplit(code string, space []int) int {
	head := string(code[0])

	// fmt.Printf("code %s space: %v\n", code, space)

	if len(space) == 2 {
		if head == "F" || head == "L" {
			return space[0]
		}
		return space[1]
	}

	half := len(space) / 2

	if head == "B" || head == "R" {
		return BinarySplit(code[1:], space[half:])
	}
	return BinarySplit(code[1:], space[:half])
}

// RemoveDuplicate from a string
func RemoveDuplicate(slice string) string {
	keys := make(map[rune]bool)
	result := ""

	// If the key(values of the slice) is not equal
	// to the already present value in new slice (list)
	// then we append it. else we jump on another element.
	for _, entry := range slice {
		if _, value := keys[entry]; !value {
			keys[entry] = true
			result += string(entry)
		}
	}
	return result
}

// StringListRemoveDuplicate from a string
func StringListRemoveDuplicate(list []string) []string {
	result := []string{}

	for _, entry := range list {
		if !ListContainsString(result, entry) {
			result = append(result, entry)
		}
	}
	return result
}

func RemoveEmpty(list []string) []string {
	result := []string{}
	for _, s := range list {
		if s != "" {
			result = append(result, s)
		}
	}
	return result
}

// ListContains check if list contains the value val
func ListContains(list []int, val int) bool {
	for _, v := range list {
		if v == val {
			return true
		}
	}

	return false
}

// ListContainsString check if list contains the value val
func ListContainsString(list []string, val string) bool {
	for _, v := range list {
		if v == val {
			return true
		}
	}

	return false
}

// ListContains64 check if list contains the value val
func ListContains64(list []int64, val int64) bool {
	for _, v := range list {
		if v == val {
			return true
		}
	}

	return false
}

// ListElementsSum sum all element of a list
func ListElementsSum(list []int) int {
	result := 0
	for _, val := range list {
		result += val
	}

	return result
}

// ListElementsSum64 sum all element of a list
func ListElementsSum64(list []int64) int64 {
	result := int64(0)
	for _, val := range list {
		result += val
	}

	return result
}

func ListElementsSumFloat64(list []float64) float64 {
	result := float64(0)
	for _, val := range list {
		result += val
	}

	return result
}

// ListMax return the max value contained on the list
func ListMax(list []int) int {
	result := list[0]
	for _, val := range list {
		if val > result {
			result = val
		}
	}

	return result
}

// ListMax64 return the max value contained on the list
func ListMax64(list []int64) int64 {
	result := list[0]
	for _, val := range list {
		if val > result {
			result = val
		}
	}

	return result
}

// ListMin return the min value contained on the list
func ListMin(list []int) int {
	result := list[0]
	for _, val := range list {
		if val < result {
			result = val
		}
	}

	return result
}

// ListMin64 return the min value contained on the list
func ListMin64(list []int64) int64 {
	result := list[0]
	for _, val := range list {
		if val < result {
			result = val
		}
	}

	return result
}

// ListRemoveVal Remove all occurrence of val from list
func ListRemoveVal(list []int, val int) []int {
	result := []int{}
	for _, v := range list {
		if v == val {
			continue
		}

		result = append(result, v)
	}

	return result
}

// ListRemoveValFirst Remove first occurrence of val from list
func ListRemoveValFirst(list []int, val int) []int {
	result := []int{}
	done := false
	for _, v := range list {
		if v == val && !done {
			done = true
			continue
		}

		result = append(result, v)
	}

	return result
}

// ListRemoveVal Remove all occurrence of val from list
func ListRemoveVal64(list []int64, val int64) []int64 {
	result := []int64{}
	for _, v := range list {
		if v == val {
			continue
		}

		result = append(result, v)
	}

	return result
}

// ListRemoveValsList Remove all occurrence of vals from list
func ListRemoveValsList(list, vals []int) []int {
	result := []int{}
	for _, v := range list {
		if ListContains(vals, v) {
			continue
		}

		result = append(result, v)
	}

	return result
}

// ListRemoveValsList Remove all occurrence of vals from list
func StringRemoveListFromList(list, vals []string) []string {
	result := []string{}
	for _, v := range list {
		if ListContainsString(vals, v) {
			continue
		}

		result = append(result, v)
	}

	return result
}

// ListCount Count the occurence of specified val
func ListCount(list []int, val int) int {
	result := 0
	for _, v := range list {
		if v == val {
			result++
		}
	}

	return result
}
