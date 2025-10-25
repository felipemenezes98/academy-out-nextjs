export const getImage = ({
  width = 'w1280',
  path,
}: {
  width?: string
  path: string
}) => {
  if (!path)
    return {
      src: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    }

  return {
    src: `${process.env.NEXT_PUBLIC_IMAGE_URL}/${width}/${path}`,
  }
}
