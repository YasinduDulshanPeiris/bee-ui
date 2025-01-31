/**
 * Copyright 2024 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use client';

import dynamic from 'next/dynamic';
import { PropsWithChildren } from 'react';

const ProgressBar = dynamic(
  () => import('next-nprogress-bar').then((module) => module.AppProgressBar),
  { ssr: false },
);

interface Props {
  nonce?: string;
}

export function ProgressBarProvider({
  children,
  nonce,
}: PropsWithChildren<Props>) {
  return (
    <>
      <ProgressBar
        color="#0f62fe"
        height="3px"
        options={{ showSpinner: false }}
        shallowRouting
        nonce={nonce}
      />

      {children}
    </>
  );
}
