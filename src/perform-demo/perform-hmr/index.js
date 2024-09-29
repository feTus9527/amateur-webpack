require("../../assets/styles/demo-hmr.css");

const app = document.getElementById("app");

app.innerHTML = `
<div class="form">
  <div class="form-item">
    <label for="name">姓名：</label
    >
    <input
      type="text"
      id="name"
      name="name"
      required
    />
  </div>
  <div class="form-item">
    <label
      for="department"
      >部门：</label
    >
    <input
      type="text"
      id="department"
      name="department"
      required
    />
  </div>
  <div class="form-item">
    <label
      for="leave-type"
      >请假类型：</label
    >
    <select
      id="leave-type"
      name="leave-type"
      required
    >
      <option value="">请选择</option>
      <option value="sick">病假</option>
      <option value="personal">事假</option>
      <option value="annual">年假</option>
      <option value="other">其他</option>
    </select>
  </div>
  <div class="form-item">
    <label
      for="start-date"
      >开始日期：</label
    >
    <input
      type="date"
      id="start-date"
      name="start-date"
      required
    />
  </div>
  <div class="form-item">
    <label
      for="end-date"
      >结束日期：</label
    >
    <input
      type="date"
      id="end-date"
      name="end-date"
      required
    />
  </div>

  <div class="form-item">
    <label for="reason">请假原因：</label>
    <textarea
      id="reason"
      name="reason"
      rows="4"
      required
    ></textarea>
  </div>

  <div class="form-item">
    <label>工作安排：</label>
    <div class="mt-2">
      <label>
        <input
          type="checkbox"
          name="work-arrangement"
          value="handover"
        />
        <span>工作交接</span>
      </label>
    </div>
    <div>
      <label>
        <input
          type="checkbox"
          name="work-arrangement"
          value="remote"
        />
        <span>远程工作</span>
      </label>
    </div>
    <div>
      <label>
        <input
          type="checkbox"
          name="work-arrangement"
          value="postpone"
        />
        <span>工作延期</span>
      </label>
    </div>
  </div>

  <div class="form-item">
    <label>是否需要审批：</label>
    <div>
      <label>
        <input
          type="radio"
          name="approval"
          value="yes"
          required
        />
        <span>是</span>
      </label>
      <label>
        <input
          type="radio"
          name="approval" 
          value="no"
          required
        />
        <span>否</span>
      </label>
    </div>
  </div>
  <div class="form-item">
    <button type="submit">
      提交申请
    </button>
    <button type="reset">
      重置
    </button>
  </div>
</div>
`;
