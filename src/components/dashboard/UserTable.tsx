import React from 'react';

const UserTable = ({ users }: { users: any[] }) => {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-lg">Team Collaboration</h3>
        <button className="text-xs border border-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-50 transition-colors">+ Add Member</button>
      </div>
      <div className="space-y-5">
        {users.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700 uppercase">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">{user.name}</p>
                <p className="text-[11px] text-gray-400">{user.email}</p>
              </div>
            </div>
            <span className={`text-[10px] px-2 py-1 rounded-full font-medium ${user.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'}`}>
              {user.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserTable;