import { WAConnection, WAChatUpdate } from '@adiwajshing/baileys'
import State from '../State'

export interface CommandOptions {
  name: string | string[]
  description: string

  middleware?: (client: WAConnection, context: WAChatUpdate, state: State) => Promise<any>
  example?: string
  args?: string[]
  cooldown?: number
}

