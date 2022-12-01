package utils

import (
	"log"
	"strconv"
	"strings"
)

// ListOfStrings transform input in a list of string, if last string is empty it will be removed
func ListOfStrings(input []byte) []string {
	inputString := strings.TrimSuffix(string(input), "\n")
	return strings.Split(inputString, "\n")
}

// ListOfInts transform input in a list of numbers
func ListOfInts(input []byte) []int {
	rows := ListOfStrings(input)

	numbers := []int{}

	for _, val := range rows {
		v, err := strconv.ParseInt(val, 10, 64)

		if err != nil {
			log.Fatalf("%v", err)
		}

		numbers = append(numbers, int(v))
	}

	return numbers
}

// ListOfInt64 transform input in a list of numbers
func ListOfInt64(input []byte) []int64 {
	rows := ListOfStrings(input)

	numbers := []int64{}

	for _, val := range rows {
		v, err := strconv.ParseInt(val, 10, 64)

		if err != nil {
			log.Fatalf("%v", err)
		}

		numbers = append(numbers, v)
	}

	return numbers
}

func ListOfSeparatedInt64(input []byte, separator string) []int64 {
	txt := string(input)
	strs := strings.Split(txt, separator)

	numbers := []int64{}

	for _, val := range strs {
		v, err := strconv.ParseInt(val, 10, 64)

		if err != nil {
			log.Fatalf("%v", err)
		}

		numbers = append(numbers, v)
	}

	return numbers
}

func ListOfSeparatedInt(input []byte, separator string) []int {
	txt := string(input)
	strs := strings.Split(txt, separator)

	numbers := []int{}

	for _, val := range strs {
		v, err := strconv.ParseInt(val, 10, 64)

		if err != nil {
			log.Fatalf("%v", err)
		}

		numbers = append(numbers, int(v))
	}

	return numbers
}
