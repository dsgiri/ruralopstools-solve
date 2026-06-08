import { SEO } from '../components/SEO';

export function License() {
  return (
    <div className="flex-grow bg-[#F9FAF8] py-16 px-4 sm:px-8">
      <SEO 
        title="Open Source License | Solve | Rural Utility Cost" 
        description="Open source MIT license definitions for the Solve planning application." 
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-[#1A1A1A] uppercase tracking-tighter mb-4">Open Source License</h1>
          <div className="w-16 h-2 bg-[#1E3A8A] mb-8"></div>
        </div>

        <div className="max-w-2xl text-[13px] text-gray-700">
          <p className="mb-8 leading-relaxed text-sm font-medium">
            The Solve tools and calculators follow the shared open-source philosophy of the Rural Utility Cost master project. 
          </p>

          <div className="bg-[#F1F3F0] border border-[#D1D5DB] p-8 rounded-lg font-mono text-[11px] text-gray-600 leading-relaxed overflow-x-auto shadow-sm">
            <p className="font-bold mb-4 uppercase tracking-widest text-[#1A1A1A]">MIT License</p>
            <p className="mb-4">Copyright (c) 2026 Rural Utility Cost Contributors</p>
            <p className="mb-4">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files (the "Software"), to deal
              in the Software without restriction, including without limitation the rights
              to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              copies of the Software, and to permit persons to whom the Software is
              furnished to do so, subject to the following conditions:
            </p>
            <p className="mb-4">
              The above copyright notice and this permission notice shall be included in all
              copies or substantial portions of the Software.
            </p>
            <p>
              THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              SOFTWARE.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
