type DataType = {
  children: [
    {
      attr: '人口65歳以上'
      value: number
      children: [
        {
          attr: '接種済み'
          value: number
          children: [
            {
              attr: 'うち1回接種済み'
              value: number
            },
            {
              attr: 'うち1回接種割合'
              value: number
            },
            {
              attr: 'うち2回接種済み'
              value: number
            },
            {
              attr: 'うち2回接種割合'
              value: number
            }
          ]
        },
        {
          attr: 'うち1回接種'
          value: number
        },
        {
          attr: 'うち2回接種'
          value: number
        }
      ]
    }
  ]
}

type VaccineType = {
  人口65歳以上: number
  接種済み: number
  うち1回接種済み: number
  うち1回接種割合: number
  うち2回接種済み: number
  うち2回接種割合: number
  うち1回接種: number
  うち2回接種: number
}

interface ChildData {
  attr: string
  value: number
}

type ChildDataType = {
  attr?: string
  value?: number
  children?: ChildData[]
}

function getSelectedItem(data: DataType, key: string) {
  let result: number | undefined
  const recursiveSearch = (data: ChildDataType) => {
    if (result) {
      return
    }
    if (data.attr === key) {
      result = data.value
    } else if (data.children) {
      data.children.forEach((child: ChildDataType) => {
        if (result) {
          return
        }
        recursiveSearch(child)
      })
    }
  }
  recursiveSearch(data)

  return result || 0
}

/**
 * Format for *Chart component
 *
 * @param data - Raw data
 */
export default (data: DataType) => {
  return {
    人口65歳以上: getSelectedItem(data, '人口65歳以上'),
    接種済み: getSelectedItem(data, '接種済み'),
    うち1回接種済み: getSelectedItem(data, 'うち1回接種済み'),
    うち1回接種割合: getSelectedItem(data, 'うち1回接種割合'),
    うち2回接種済み: getSelectedItem(data, 'うち2回接種済み'),
    うち2回接種割合: getSelectedItem(data, 'うち2回接種割合'),
    うち1回接種: getSelectedItem(data, 'うち1回接種'),
    うち2回接種: getSelectedItem(data, 'うち2回接種'),
  } as VaccineType
}
