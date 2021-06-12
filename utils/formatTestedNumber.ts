type DataType = {
  children: [
    {
      attr: '累計検査人数'
      value: number
      children: [
        {
          attr: 'うち1日当たりの検査人数'
          value: number
        }
      ]
    },
    {
      attr: '累計検査件数'
      value: number
      children: [
        {
          attr: 'うち1日当たりの検査件数'
          value: number
        }
      ]
    }
  ]
}

type PCRType = {
  累計検査人数: number
  うち1日当たりの検査人数: number
  累計検査件数: number
  うち1日当たりの検査件数: number
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
    累計検査人数: getSelectedItem(data, '累計検査人数'),
    うち1日当たりの検査人数: getSelectedItem(data, 'うち1日当たりの検査人数'),
    累計検査件数: getSelectedItem(data, '累計検査件数'),
    うち1日当たりの検査件数: getSelectedItem(data, 'うち1日当たりの検査件数'),
  } as PCRType
}
