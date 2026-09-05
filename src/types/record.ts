export type RecordCategories = 'weight' | 'protein' | 'carbs'

export type RecordType = {
  id: number
  date: Date
  text: string
  category: RecordCategories
}