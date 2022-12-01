package day01

import (
	"aoc-2021/days/utils"
	"fmt"
	"log"
	"math"
	"sort"
	"strconv"
	"strings"
)

func Run2(data []byte) {
	rows := strings.Split(string(data), "\n")

	maxes := []float64{}

	list := []float64{}
	for _, r := range rows {
		if r == "" {
			currentElf := utils.ListElementsSumFloat64(list)
			fmt.Printf("Current elf %f\n", currentElf)
			maxes = append(maxes, currentElf)
			sort.Sort(sort.Reverse(sort.Float64Slice(maxes)))
			maxes = maxes[:int(math.Min(3, float64(len(maxes))))]

			list = []float64{}
			continue
		}

		v, err := strconv.ParseFloat(r, 64)
		if err != nil {
			log.Fatal("Unable to convert value")
		}
		list = append(list, v)
	}

	top3Elf := utils.ListElementsSumFloat64(maxes)

	fmt.Printf("Max calories %f\n", top3Elf)
}
