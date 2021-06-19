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
              attr: 'うち2回接種済み'
              value: number
            }
          ]
        },
        {
          attr: '未接種'
          value: number
        }
      ]
    }
  ]
}

type VaccineType = {
  接種済み: number
  うち1回接種済み: number
  うち2回接種済み: number
  未接種: number
}

function getSelectedItem(data: DataType, key: string) {
  let result: number | undefined
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
    接種済み: getSelectedItem(data, '接種済み'),
    うち1回接種済み: getSelectedItem(data, 'うち1回接種済み'),
    うち2回接種済み: getSelectedItem(data, 'うち2回接種済み'),
    未接種: getSelectedItem(data, '未接種'),
  } as VaccineType
}
