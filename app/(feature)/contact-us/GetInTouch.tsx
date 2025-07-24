import { Button } from "@/components/ui/button";
import React from "react";

const GetInTouch = () => {
  return (
    <div className="my-12">
      <form className="mt-8 space-y-5">
        <div>
          <label className="text-sm text-slate-900 font-medium mb-2 block">
            Name
          </label>
          <input
            type="text"
            required
            placeholder="Enter Name"
            className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
          />
        </div>
        <div>
          <label className="text-sm text-slate-900 font-medium mb-2 block">
            Email
          </label>
          <input
            type="email"
            required
            placeholder="Enter Email"
            className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
          />
        </div>
        <div>
          <label className="text-sm text-slate-900 font-medium mb-2 block">
            Subject
          </label>
          <input
            type="text"
            required
            placeholder="Enter Subject"
            className="w-full py-2.5 px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm outline-0 transition-all"
          />
        </div>
        <div>
          <label className="text-sm text-slate-900 font-medium mb-2 block">
            Message
          </label>
          <textarea
            required
            placeholder="Enter Message"
            rows={6}
            className="w-full px-4 text-slate-800 bg-gray-100 border border-gray-200 focus:border-slate-900 focus:bg-transparent text-sm pt-3 outline-0 transition-all"
          ></textarea>
        </div>
        <Button
          type="submit"
          className="text-white bg-primary-300 font-medium hover:bg-primary-400/85 tracking-wide text-sm px-4 py-8 w-full border-0 outline-0 cursor-pointer"
        >
          Send message
        </Button>
      </form>
    </div>
  );
};

export default GetInTouch;
