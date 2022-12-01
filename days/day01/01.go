package day01

import (
	"aoc-2021/days/utils"
	"fmt"
	"log"
	"math"
	"strconv"
	"strings"
)

func Run(data []byte) {
	rows := strings.Split(string(data), "\n")

	max := int64(math.MinInt64)
	list := []int64{}
	for _, r := range rows {
		if r == "" {
			currentElf := utils.ListElementsSum64(list)
			fmt.Printf("Current elf %d\n", currentElf)
			max = int64(math.Max(float64(max), float64(currentElf)))
			list = []int64{}
			continue
		}

		v, err := strconv.ParseInt(r, 10, 64)
		if err != nil {
			log.Fatal("Unable to convert value")
		}
		list = append(list, v)
	}

	fmt.Printf("Max calories %d\n", max)
}
