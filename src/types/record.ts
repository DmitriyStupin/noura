export type RecordCategories = 'weight' | 'protein' | 'carbs' | 'trainer'

export type RecordType = {
  id: number
  date: Date
  text: string
  category: RecordCategories
}