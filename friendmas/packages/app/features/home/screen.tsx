import {
  Button,
  H1,
  Paragraph,
  YStack,
} from '@my/ui'
import React from 'react'
import { ArrowBigRightDash } from '@tamagui/lucide-icons'
import { useLink } from 'solito/navigation'

export function HomeScreen() {
  const link = useLink({ href: '/mainscreen' })

  return (
    <YStack 
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="$background"
    
    >
      <H1
        enterStyle={{
          scale: 1.5,
          y: -10,
          opacity: 0,
        }}
        animation ="bouncy"
        opacity={1}
        scale={1}
        y={0}
        color={'black'}
      >
        Friendmas 2025
      </H1>

      <Paragraph
        enterStyle={{ opacity: 0, y: 5 }}
        animation ="lazy"
      >
        :D
      </Paragraph>

      <Button
        icon={ArrowBigRightDash}
        {...link}
        enterStyle={{ opacity: 0, scale: 0.9 }}
        animation ="bouncy"
      >
        Continue
      </Button>
    </YStack>
  )
}
